  var file_upload = document.getElementById("file_upload");
        file_upload.addEventListener("change", function(){
            var files = this.files;
            if(files[0].type.match('image')){
                readFile(files[0]);
            }
        });
        function readFile(file){
            var reader = new FileReader();
            reader.onload = function(e){
                var file_content = e.target.result;
                // write here what to do with file.
            };
            reader.readAsDataURL(file);
        }