

(function (n, t, a, e, co) {
    var i = "aptrinsic"; n[i] = n[i] || function () {
      (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e; n[i].c = co;
    var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
  })(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-Z57KBTR9DEZC-2");
  
  
  
  
  function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  }
  
  
  
  
  
  
  function PXPageTimer(maxSecondsTracked, trackPagesOverMax) {
    this.pageName = null;
    this.startTime = null;
    this.maxSecondsTracked = maxSecondsTracked || 3600 * 24;
    this.trackPagesOverMax = trackPagesOverMax !== false;
    this.startTimer = function (pageName) {
      try {
        if (this.pageName && this.pageName !== pageName) {
          this.endTimer();
        }
        this.pageName = pageName;
        this.startTime = Date.now();
      } catch (e) {
        console.log("Unable to start timer on ", this.pageName);
      }
    };
    this.endTimer = function (pageUnloaded) {
      try {
        if (this.pageName) {
          let endTime = Date.now();
          let secondsOnPage = (endTime - this.startTime) / 1000;
          if (secondsOnPage <= this.maxSecondsTracked || this.trackPagesOverMax) {
            window.aptrinsic('track', 'timeOnPage', {
              'pageName': this.pageName,
              'seconds': Math.min(secondsOnPage,this.maxSecondsTracked),
              'pageUnloaded': pageUnloaded
            });
          }
          this.pageName = undefined;
        }
      } catch (e) {
        console.log("Unable to log time on page", this.pageName);
      }
    };
  }
  
  (function InitializeTimer() {
    let maxSecondsTracked = 60 * 60; // Track time on page for up to one hour
    let trackPagesOverMax = false;  // Ignore any pages over one hour
    let featureTimer = new PXPageTimer(maxSecondsTracked, trackPagesOverMax);
    
    // Initial page
    featureTimer.startTimer(window.location.href);
  
    window.addEventListener('hashchange', () => {
      featureTimer.startTimer(window.location.href);
    });
    window.addEventListener('popstate', () => {
      featureTimer.startTimer(window.location.href);
    });
    window.addEventListener('beforeunload', () => {
      featureTimer.endTimer(true);
    });
    let realPushState = window.history.pushState;
    window.history.pushState = function (state, title, newLocation) {
      featureTimer.startTimer(newLocation.href);
      return realPushState.apply(window.history, arguments); // Call the original
    };
  })();
  
  /*
  if(location = "https://dimplesaigurivelli.github.io/pxdemo/visitor.html"){
  
    aptrinsic("identify",
              {
                id: "visitor"
              },
            )
  } */
  
  
  function aboutGC() {
    aptrinsic('set', 'globalContext', {'URL' : 'about'});
  
  }
  function contactGC() {
    aptrinsic('set', 'globalContext', {'URL' : 'contact'});
  
  }
  function ifGC() {
    aptrinsic('set', 'globalContext', {'URL' : 'iftest'});
  
  }
  
  
  function login() {
    var a = document.getElementById('UserEmail').value;
    
  
    const accounts = ["1001", "1002", "1003", "1004", "1005","1006"];
    const mailId = ["dimple@gmail.com", "monica@gmail.com", "chandler@gmail.com", "ross@gmail.com", "phoebe@gmail.com","dimplesaig@gmail.com"];
  
    for (var i = 0; i < accounts.length; i++) {
      if (a == mailId[i]) {
          var userid = mailId[i].substring(4, 9);
          if (a == "dimple@gmail.com") {
            
            aptrinsic("identify",
              {
                id: userid,
                email: a,
                "firstName": "dimple"
              },
              
              {
                id:"1009",
                name:"AmazonNew",
               
  
              });
  
              aptrinsic('set', 'globalContext', {"package": "elite"});
  
          }
  
         
          else if (a == "monica@gmail.com") {
           
            aptrinsic("identify",
              {
                id: userid,
                email: a,
                "firstName": "monica"
              },
              
              {
                id:"1002",
                name:"Cadbury",
            
              });
              aptrinsic('set', 'globalContext', {"package": "elite"});
  
          }
          else if (a == "chandler@gmail.com") {
           
            aptrinsic("identify",
              {
                id: userid,
                email: a,
                "firstName":"chandler"
              },
              
              {
                id:"1003",
                name:"Microsoft",
               
              });
              aptrinsic('set', 'globalContext', {"package": "premier"});
  
          }
          else if (a == "ross@gmail.com") {
            
            aptrinsic("identify",
              {
                id: userid,
                email: a,
                "firstName":"ross"
              },
              
              {
                id:"1004",
                name:"Myntra",
              
              });
              aptrinsic('set', 'globalContext', {"package": "standard"});
  
          }
          else if (a == "phoebe@gmail.com") {
           
            aptrinsic("identify",
              {
                id: userid,
                email: a,
                "firstName":"phoebe"
              },
  
              {
                id:"1005",
                name:"Tata",
               
              }
              );
              aptrinsic('set', 'globalContext', {"package": "standard"});
  
          }
  
          else if (a == "dimplesaig@gmail.com") {
            
            aptrinsic("identify",
              {
                id: userid,
                email: a,
                "firstName":"dimplesai"
              },
  
              {
                id:"1006",
                name:"Apple",
               
              }
              );
              aptrinsic('set', 'globalContext', {"package": "standard"});
  
          }
          alert("Your Unique Id is : " + " " + userid);
          location = "index.html"
        }
  
      
      }
    }
