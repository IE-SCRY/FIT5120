from flask import Flask, flash, redirect, render_template, request, session, abort
#import ast
import pandas as pd

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/locate_places', methods=['POST'])
def locate_places():
    #print(request.data)
    #print(request.form)
    lat = 0
    lng = 0
    median = 0
    num_beds_present = "0"
    data = pd.read_csv("https://indust-exp.s3-ap-southeast-2.amazonaws.com/Suburb-Median_rent.csv") 
    num_of_beds = request.form.get("number_of_beds")
    sub_urb_content = request.form.get("sub_urb_content")
    uni_content = request.form.get("uni_content")
    post_code_content = request.form.get("post_code_content")
    type_of_property = request.form.get("type_of_property")
    sub_urb_rendered = ""
    if num_of_beds == "one_bed":
        num_beds_present = "1"
    elif num_of_beds == "two_bed": 
        num_beds_present = "2"
    elif num_of_beds == "three_bed": 
        num_beds_present = "3"
    req_content = "Median-"+num_beds_present+"Bed_"+type_of_property
    print(req_content)
    localvars_table = ""
    if post_code_content != "":
        data["postcode"] = data.postcode.apply(str)
        test = data[data["postcode"].str.contains(post_code_content)]
        lat = float(test.iloc[0]["latitude"])
        lng = float(test.iloc[0]["longitude"])
        median = test.iloc[0][req_content]
        sub_urb_rendered = test.iloc[0]["Suburb"]
    elif sub_urb_content != "":
        data["Suburb"] = data["Suburb"].str.lower()
        sub_urb_content = sub_urb_content.lower()
        test = data[data["Suburb"].str.contains(sub_urb_content)]
        lat = float(test.iloc[0]["latitude"])
        lng = float(test.iloc[0]["longitude"])
        median = test.iloc[0][req_content]
        sub_urb_rendered = test.iloc[0]["Suburb"]
    elif uni_content != "":
        orig_uni_content = uni_content.split(", ")[1]
        data["Suburb"] = data["Suburb"].str.lower()
        print(orig_uni_content)
        orig_uni_content = orig_uni_content.lower()
        test = data[data["Suburb"].str.contains(orig_uni_content)]
        lat = float(test.iloc[0]["latitude"])
        lng = float(test.iloc[0]["longitude"])
        median = test.iloc[0][req_content]
        sub_urb_rendered = test.iloc[0]["Suburb"]
    localvars_table += "<p>Sub-urb: %s</p>" %(sub_urb_rendered)
    localvars_table += "<p>Property Type: %s %s</p>" %( num_of_beds, type_of_property)
    localvars_table += "<p>Median: %s</p>" %(median)
    return("""<html><head>   <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%%;
        margin: 0;
        padding: 0;
      }
    </style></head><body> <div id="map"></div>
        <script>

      // This example displays a marker at the center of Australia.
      // When the user clicks the marker, an info window opens.

      function initMap() {
        var uluru = {lat: %f, lng: %f};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: uluru
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Median House Rent</h1>'+
            '<div id="bodyContent">'+
            '<p>%s</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          title: 'Median House Rent'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASoEMqRW1dxprp2xF3nOh6gaehPn4UVVU&callback=initMap">
    </script></body></html>"""% (lat, lng, localvars_table))

@app.route('/weekly_rent', methods=['POST'])
def weekly_rent():
    #print(request.data)
    weekly_rent_content = request.form["weekly_rent_content"]
    weekly_rent_given = int(weekly_rent_content)
    def bond_calculation(weekly_rent):

        per_day = weekly_rent / 7
        per_year = per_day * 365
        per_month = per_year /12

        return round(per_month)
    localvars_table = ""
    if weekly_rent_given <= 350:
        #localvars_table += '<tr><th><p>%s</p></th></tr>' %(str(doc_id) + "," + str(cos_sim_val))
        localvars_table +="<p>%s</p>" %('If your weekly rent is ' + str(weekly_rent_given) + '$ AUD ,the bond value cannot be more than one month rent.')
        localvars_table +="<p>%s</p>" %('Your Bond value is '+ str(bond_calculation(weekly_rent_given)) +'$ AUD based on your weekly rent.')
        localvars_table +="<p>%s</p>" %('A landlord or estate agent may charge a bond that is more than one month’s rent if,\n the landlord or estate agent gets an order from the Victorian Civil and Administrative Tribunal (VCAT) setting out the amount of an increased bond.')
    else:
        localvars_table += "<p>%s</p>" %('If your weekly rent is ' + str(weekly_rent_given) + '$ AUD, landlord or estate agent may charge a bond that is more than one month’s rent.')
        localvars_table += "<p>%s</p>" %('May charge more than one month’s rent, if the landlord or estate agent gets an order from the Victorian Civil and Administrative Tribunal (VCAT) setting out the amount of an increased bond.')
        localvars_table += "<p>%s</p>" %('Your monthly rent is ' + str(bond_calculation(weekly_rent_given)) + '$ AUD based on your weekly rent.')
    
    #localvars_table += '<tr><th><p>%s</p></th></tr>' %(str(doc_id) + "," + str(cos_sim_val))
    return("""<html><head></head><body><h2>%s</h2></body></html>"""% (localvars_table))

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)