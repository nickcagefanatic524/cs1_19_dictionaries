// Write a function as specified in each of the paragraphs below.

// Write a function callled `showPerson`.  It takes a dictionary with
// attributes 'name' and 'email'.  It gives back a string. For example,
// showPerson({'name': 'Daniel Bergey', 'email': 'dbergey@friendscentral.org'})
// returns "Daniel Bergey <dbergey@friendscentral.org>"

var showPerson = function(p){
    return p.name + ' <' + p.email + '>'
    
};
// Write `showDate`.
// Input: {year: 1970, month: 01, day:01, hour: 0, minute: 0, second: 0}
// Output: "1970-01-31T12:59:59" Note the T between date and time
var showDate = function(d){
    if(d.year<10){
        d.year = '0' + d.year;
    }
    if(d.month<10){
        d.month = '0'+d.month;
    }
    if(d.day<10){
        d.day = '0' + d.day;
    }
    if(d.hour<10){
        d.hour = '0' +d.hour;
    }
    if(d.minute<10){
        d.minute = '0' + d.minute;
    }
    if(d.second<10){
        d.second='0'+d.second;
    }
    return d.year + '-' + d.month + "-" + d.day + "T" + d.hour + ":" + d.minute + ":" + d.second
};

    
// compareInts
// Input: 2 integer numbers
// Output: one of "LT", "EQ", or "GT" (less than, equal, or greater than)
var compareInts = function(c,q){
    if(c>q){
        return "GT";
    }
    if(c==q){
        return "EQ";
    }
    if(c<q){
        return "LT";
    }
};
// compareDates
// Input: Two dates, in the format:
// {year: 1969, month: 7, day: 24, hour: 16, minute: 50, second: 35}
// Output: one of "LT", "EQ", or "GT"
var compareDates = function(a,s){
    if(a.year>s.year){
        return "GT";
    }
    if(a.year<s.year){
        return "LT";
    }
    if(a.year==s.year){
        if(a.month>s.month){
            return "GT";
        }
        if(a.month<s.month){
            return "LT";
        }
        if(a.month==s.month){
            if(a.day>s.day){
                return "GT";
            }
            if(a.day<s.day){
                return 'LT';
            }
            if(a.day == s.day){
                if(a.hour>s.hour){
                    return "GT";
                }
                if (a.hour<s.hour){
                    return "LT";
                }
                if(a.hour==s.hour){
                    if(a.minute>s.minute){
                        return "GT";
                    }
                    if(a.minute<s.minute){
                        return "LT";
                    }
                    if(a.minute==s.minute){
                        if(a.second>s.second){
                            return "GT";
                        }
                        if(a.second<s.second){
                            return "LT";
                        }
                        if(a.second==s.second){
                            return "EQ";
                        }
                    }
                }
            }
        }
            
    }
};
// elementOf
// Input: a String and a list of Strings
// Output: true or false (lowercase - these are JS keywords)
// return true if the first input is present in the list (second input)
var elementOf = function(x,l){
    var i = 0;
    while(i<l.length){
        if(x==l[i]){
        return true;
        }
        i++;
    }
    
    if(i==l.length){
        return false;
    }
    
};
// hasTag
// Input: a String and an Email
// Email has the following attributes:
// sender, recipients, subject, date, body, tags
// Output: true or false
// return true if the first input is present in the tags of the email

// filterByTag
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list with those emails that have the first input in their tags
// return the emails in the same order they appear in the input
// use hasTag

// parseYear
// Input: String, in the format "2016"
// Output: Int, 2016
// use `parseInt`:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

// parseDate
// Input: String, in the format"2016-01-20T13:41:00"
// Output: A Date dictionary, with the attributes:
// year, month, day, hour, minute, second
// use parseInt and substr:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

// inSubject
// Input: a String and an Email, in the same format as hasTag
// Output: true or false
// return true if the first input is part of the 'subject' field of the Email
// use .includes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

// filterBySubject
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list of the emails that have the first email in their subject
// use inSubject

// inBody
// Input: a String and an Email, in the same format as hasTag
// Output: true or false
// return true if the first input is part of the 'body' field of the Email

// filterByBody
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list of the emails that have the first email in their body
// use inBody
