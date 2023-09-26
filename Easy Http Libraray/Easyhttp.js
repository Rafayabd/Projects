class EasyHttp {
    get (url){
        return new Promise(function (resolve, reject) {
         fetch(url)
         .then(function(response){
            return response.json();
         })   
         .then(function(data){
            return resolve (data);
         })
         .catch(function(error){
            return reject(error);
         });
        });
    }
   
    
  post (url,data){
    return new Promise(function(resolve, reject) {
        fetch (url,{
            headers:{
                "Content-type" : "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        })
        .then (function(response){
            return response.json();
        })
        .then (function(data){
            return resolve (data);
        })
        .catch(function(error){
            return reject (error);
        });      
    });
  }  


  put (url,data){
    return new Promise(function(resolve, reject) {
        fetch (url,{
            headers:{
                "Content-type" : "application/json",
            },
            method: "PUT",
            body: JSON.stringify(data),
        })
        .then (function(response){
            return response.json();
        })
        .then (function(data){
            return resolve (data);
        })
        .catch(function(error){
            return reject (error);
        });      
    });
  }  


  patch (url,data){
    return new Promise(function(resolve, reject) {
        fetch (url,{
            headers:{
                "Content-type" : "application/json",
            },
            method: "PATCH",
            body: JSON.stringify(data),
        })
        .then (function(response){
            return response.json();
        })
        .then (function(data){
            return resolve (data);
        })
        .catch(function(error){
            return reject (error);
        });      
    });
  }  

delete (url){
    return new Promise(function(resolve, reject) {
        fetch(url,{
            method: "DELETE"
        })
        .then (function (response){
            return response.json ();
        })
        .then (function(data){
            return resolve (data);
        })
        .catch (function (error){
            return reject (error);
        }); 
    });

}

}
//function based libraray
function EasyHttp (){}
EasyHttp.prototype.get = function (url) {
    new Promise(function (resolve, reject) {
        fetch (url)
        .then(function(response){
            return response.json ();
        })
        .then (function(data){
            return resolve (data);
        })
        .catch (function(error){
            return reject (error);
        }); 
    });
};


EasyHttp.prototype.post = function (url,data){
    return new Promise((resolve, reject) => {
        fetch (url,{
            headers:{
                "Content-type" : "application/json",
            },

            method: "POST",
            body: JSON.stringify(data),
        })

       .then ((response) => response.json())
       .then ((data) => resolve(data))
       .catch ((error) => reject (error));
    });
};


EasyHttp.prototype.put = function (url,data){
    return new Promise((resolve, reject) => {
        fetch (url,{
            headers:{
                "Content-type" : "application/json",
            },

            method: "PUT",
            body: JSON.stringify(data),
        })

       .then ((response) => response.json())
       .then ((data) => resolve(data))
       .catch ((error) => reject (error));
    });
};


EasyHttp.prototype.patch = function (url,data){
    return new Promise((resolve, reject) => {
        fetch (url,{
            headers:{
                "Content-type" : "application/json",
            },

            method: "PATCH",
            body: JSON.stringify(data),
        })

       .then ((response) => response.json())
       .then ((data) => resolve(data))
       .catch ((error) => reject (error));
    });
};


EasyHttp.prototype.delete = function (url){
    return new Promise((resolve, reject) => {
        fetch (url,{
            method: "DELETE",
        })
        .then ((response)=> response.json())
        .then ((data)=> resolve (data))
        .catch ((error) => reject (error));
    });
};