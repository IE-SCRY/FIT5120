using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IEV3.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AboutUs()
        {
            return View();
        }

        public ActionResult Knowledgebase()
        {
            return View();
        }

        public ActionResult Questionnaire()
        {
            return View();
        }
        public ActionResult RentComparison()
        {
            return View();
        }
    }
}