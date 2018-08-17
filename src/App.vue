<template>
<div>
  <progress value="0" max="100" id="uploader"></progress>
  <input accept="image/*" type="file" value="upload" @change="fileBtn(file, $event)">
</div>
</template>

<script>
  import Firebase from 'firebase'
    const config = {
      apiKey: "AIzaSyAAbexKrw69BHwE3VVXMvSzh3VLmKnqvQ8",
    authDomain: "udemy-geo-ninjas-a7f3b.firebaseapp.com",
    databaseURL: "https://udemy-geo-ninjas-a7f3b.firebaseio.com",
    projectId: "udemy-geo-ninjas-a7f3b",
    storageBucket: "uploadimages-4132e.appspot.com",
    messagingSenderId: "8307796238"
    }
    const app = Firebase.initializeApp(config);
export default {
  data () {
    return {
      file: null
    }
  },
  methods:{
    fileBtn:function(file, e){
        e.preventDefault();
      const uploader = document.getElementById('uploader');
      //get file
      let getFile = e.target.files[0];
      //set storage ref
      let storageRef = Firebase.storage().ref('test/'+getFile.name);
      //upload file
      let task = storageRef.put(getFile);
      task.on('state_changed',
       function progress(snapshot){
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
        uploader.value = percentage;
      },
      function error(err){
        console.log(err);
      },
      function complete(){
         console.log('complete upload');
      }
      );
    }
  }
}
</script>


