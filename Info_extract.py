from ast import literal_eval #
from nltk.stem import PorterStemmer
import math
import os
import sys
import re

# Tokenization class which has a tokenization function
class Tokenization:
    def __init__(self):
        self.tokens_list = []
    # This function takes a opened file as a input argument, and it tokenizes the file with several regular expressions.
    # Regex patterns are compiled for matching several patterns that occur in the file.
    def tokenization(self, file):

        date_rx = re.compile(r'((?:0[1-9]|[12][0-9]|3[01])[./-](?:(?:0?[1-9]|1[0-2])|(?:\w+))[./-](?:(?:\d{2})?\d{2}))') # Regex for Date
        single_quotes_rx = re.compile(r'(?:^|\s)\'([^\']*?)\'(?:$|\s)') # Regex for single Quotes
        hyphenated_rx = re.compile(r"([\w]+(?:\n-[\w]+)+)") # Regex for hyphenated words
        name1_rx = re.compile(r"([A-Z][\w]+[.'\s?](?:[A-Z]['.]\s?)[A-Z][\w]+(?:.[A-Z][\w]+)?)") # Regex for finding names
        cont_capital_rx = re.compile(r"([A-Z][a-z]+[ ](?:[A-Z][a-z]+[ ]?)+)") # Regex for matching continoous captial words
        acronyms_rx = re.compile(r"((?:[A-Z]\.)+(?:[A-Z]+))") # Regex for acronyms
        contraction_rx = re.compile(r"([\w]+'[\w]+)") # regex for contraction words

        puncList = [".", ";", ":", "!", "?", "/", "\\", ",", "#", "@", "$", "&", ")", "(", "\"",'\n','-','_']
        # punctuation list is pre defined for removing punctuation present in the list from the tokenized words

        # Empty lists are declared for storing the matched words in their coresponding list
        date_list = []
        single_quotes = []
        hyphenated_list = []
        name1_list = []
        cont_capital_list = []
        acronyms_list = []
        contraction_list = []

        # Getting IP address from the file
        if re.search(IP_rx,file):
            IP_address_list = re.findall(IP_rx,file) # all matched groups are stored in the list
            # print('IP',IP_address_list)
            for i in range(len(IP_address_list)):
                file = file.replace(IP_address_list[i], '') # after a group is matched, its removed from the file
                IP_address_list[i] = str(IP_address_list[i]).strip('`()*&^%$#@!+_-~{}[]:;?/.,\' ')  # strip function is used for obtained string present in the list

        # Getting Email patterns from the file
        if re.search(email_rx,file):
            email_list = re.findall(email_rx,file) # all matched groups are stored in the list
            # print('Email', email_list)
            for i in range(len(email_list)):
                file = file.replace(email_list[i], '') # after a group is matched, its removed from the file
                email_list[i] = str(email_list[i]).strip('`()*&^%$#@!+_-~{}[]:;?/.,\' ') # strip function is used for obtained string present in the list

        # Getting Date patterns from the file
        if re.search(date_rx,file):
            date_list = re.findall(date_rx,file) # all matched groups are stored in the list
            # print('date', date_list)
            for i in range(len(date_list)):
                file = file.replace(date_list[i], '') # after a group is matched, its removed from the file
                date_list[i] = str(date_list[i]).strip('`()*&^%$#@!+_-~{}[]:;?/.,\' ') # strip function is used for obtained string present in the list

        # Getting URL patterns from the file
        if re.search(URL_rx, file):
            URL_list = re.findall(URL_rx, file) # all matched groups are stored in the list
            for i in range(len(URL_list)):
                file = file.replace(URL_list[i], '') # after a group is matched, its removed from the file
                URL_list[i] = str(URL_list[i]).strip('`()*&^%$#@!+_-~{}[]:;?/.,\' ') # strip function is used for obtained string present in the list

        no_removal = URL_list + date_list + email_list + IP_address_list
        # URL, Date, Email and IP adress list are combined as a single list

        # Getting Single quotes patterns from the file
        if re.search(single_quotes_rx,file):
            single_quotes = re.findall(single_quotes_rx,file) # all matched groups are stored in the list
            # print('Quotes', single_quotes)
            for i in range(len(single_quotes)):
                file = file.replace(single_quotes[i], '') # after a group is matched, its removed from the file
                single_quotes[i] = str(single_quotes[i]).strip('`()*&^%$#@!+_-~{}[]:;?/.,\' ') # strip function is used for obtained string present in the list

        # Getting Hyphenated patterns from the file
        if re.search(hyphenated_rx,file):
            hyphenated_list = re.findall(hyphenated_rx,file) # all matched groups are stored in the list
            # print('hyphenated_rx',hyphenated_list)
            for i in range(len(hyphenated_list)):
                file = file.replace(hyphenated_list[i], '') # after a group is matched, its removed from the file
                hyphenated_list[i] = str(hyphenated_list[i]).strip('`()*&^%$#@!+_-~{}[]:;?/.,\' ') # strip function is used for obtained string present in the list

        # Getting name patterns from the file
        if re.search(name1_rx,file):
            name1_list = re.findall(name1_rx,file) # all matched groups are stored in the list
            # print('name',name1_list)
            for i in range(len(name1_list)):
                file = file.replace(name1_list[i], '') # after a group is matched, its removed from the file
                name1_list[i] = str(name1_list[i]).strip('`()*&^%$#@!+_-~{}[]:;?/.,\' ') # strip function is used for obtained string present in the list

        # Getting contraction word patterns from the file
        if re.search(contraction_rx,file):
            contraction_list = re.findall(contraction_rx,file) # all matched groups are stored in the list
            # print('contraction',contraction_list)
            for i in range(len(contraction_list)):
                file = file.replace(contraction_list[i], '') # after a group is matched, its removed from the file
                if '\'s' in contraction_list[i]:
                    contraction_list[i] = contraction_list[i].replace('\'s','')
                contraction_list[i] = str(contraction_list[i]).strip('`()*&^%$#@!+_-~{}[]:;?/.,\' ') # strip function is used for obtained string present in the list

        # Getting continous capital words patterns from the file
        if re.search(cont_capital_rx,file):
            cont_capital_list = re.findall(cont_capital_rx,file) # all matched groups are stored in the list
            # print('cont_capital',cont_capital_list)
            for i in range(len(cont_capital_list)):
                file = file.replace(cont_capital_list[i], '') # after a group is matched, its removed from the file
                cont_capital_list[i] = str(cont_capital_list[i]).strip('`()*&^%$#@!+_-~{}[]:;?/.,\' ') # strip function is used for obtained string present in the list

        # Getting acronyms patterns from the file
        if re.search(acronyms_rx,file):
            acronyms_list = re.findall(acronyms_rx,file) # all matched groups are stored in the list
            # print('acronyms',acronyms_list)
            for i in range(len(acronyms_list)):
                file = file.replace(acronyms_list[i], '') # after a group is matched, its removed from the file
                acronyms_list[i] = str(acronyms_list[i]).strip('`()*&^%$#@!+_-~{}[]:;?/.,\' ') # strip function is used for obtained string present in the list

        self.tokens_list =  hyphenated_list + name1_list + cont_capital_list +acronyms_list + contraction_list + single_quotes
        # The tokens_list contains all tokens from hyphenated list, name list, cont_capital_list + acronyms List and from single quote list

        # The tokens_list is iterated for removing \n whihc also has '-',
        # this case is occuring for hyphenated words that are matched from the file
        for i in range(len(self.tokens_list)):
            if '\n' in self.tokens_list[i]:
                self.tokens_list[i] = self.tokens_list[i].replace('\n','')
                if '-' in self.tokens_list[i]:
                    self.tokens_list[i] = self.tokens_list[i].replace('-','')

        # All the tokens in tokens_list are iterated for punctuation removal
        for punct in range(len(puncList)):
            for word in range(len(self.tokens_list)):
                if puncList[punct] in self.tokens_list[word]:
                    self.tokens_list[word] = self.tokens_list[word].replace(puncList[punct], '')

        # After all the regex patterns are obtained, rest of the file split stored in words_list
        words_list = file.split()
        # print('words',words_list)

        # Punctuation removal is done for the words_list
        for punct in range(len(puncList)):
            for word in range(len(words_list)):
                if puncList[punct] in words_list[word]:
                    words_list[word] = words_list[word].replace(puncList[punct],'')

        # print('words_no_punc', words_list)
        words_filtered = []
        for each in range(len(words_list)):
            if words_list[each] != "''" and words_list[each] != '':
                words_filtered.append(words_list[each])


        # print('filtered',words_filtered)
        self.tokens_list = self.tokens_list + words_filtered + no_removal # the tokens_list is updated by combining all the list containing tokens
        return self.tokens_list # the final list is returned for a single file

class Stopword_removal:

    # In this class a function is defined for removing the stopwords from the tokens,
    # The stp_process function takes two arguments, tokens_list and stopword file.

    def __init__(self):
        self.final = []

    def stp_process(self, file, list):

        stopwords_file = open(file, 'r') # the stopwords file is opened
        stopwords_list = stopwords_file.readlines()
        for i in range(len(stopwords_list)):
            stopwords_list[i] = stopwords_list[i].replace('\n', '')

        # the token list is iterated and if the token is not present in the stopwords the token is appened to a new list
        for j in range(len(list)):
            list[j] = list[j].lower()
            if list[j] not in stopwords_list:
                if len(list[j]) >= 3:
                    self.final.append(list[j])
        return self.final

class Stemming:

    # In this class is defined for stemming process
    # A function is defined as stemming_process which takes a list as an input argument
    # Porter Stemmer is used from nltk package

    def __init__(self):
        self.stemmed = []

    def stemming_process(self,token_list):
        stemmer = PorterStemmer()
        for i in range(len(token_list)):
            self.stemmed.append(stemmer.stem(token_list[i]))
        return self.stemmed