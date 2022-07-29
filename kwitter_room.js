var firebaseConfig = {
      apiKey: "AIzaSyC3Y5nrdJ2bHb2i-5CbbIrd1M3bhSMW8sU",
      authDomain: "kwitter-cd9ca.firebaseapp.com",
      databaseURL: "https://kwitter-cd9ca-default-rtdb.firebaseio.com",
      projectId: "kwitter-cd9ca",
      storageBucket: "kwitter-cd9ca.appspot.com",
      messagingSenderId: "135058800705",
      appId: "1:135058800705:web:a979470cbcb16eb8f906c0"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "kwitter.html";
    }
    
    
      //Start code

      //End code
      

