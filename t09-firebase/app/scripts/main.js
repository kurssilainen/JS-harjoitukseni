console.log(' === FIREBASE-HARJOITELMA ===');


<script>
      var myDataRef = new Firebase('https://kcq8n11t2tg.firebaseio-demo.com/');
      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          myDataRef.set('User ' + name + ' says ' + text);
          $('#messageInput').val('');
        }
      });
 </script>
  