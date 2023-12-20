<script>
    //intital tanggal dan waktu dari id
    var dateDisplay = document.getElementById("datenow");
    var timeDisplay = document.getElementById("timenow");
    //fungsi
    function refreshTime() {
      var dateString = new Date().toLocaleString("id-ID", {timeZone: "Asia/Jakarta"}); //gettime
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      var todayy = dd + '/' + mm + '/' + yyyy;
      var formattedString = dateString.replace(",","-");

      dateDisplay.innerHTML = todayy; // date

      var splitarray = new Array();
      splitarray= formattedString.split(" ");
      var splitarraytime = new Array();
      splitarraytime= splitarray[1].split(".");
      timeDisplay.innerHTML = splitarraytime[0]+':'+splitarraytime[1]+':'+splitarraytime[2]; // time
    }
    //panggil ulang otomatis fungsi
    setInterval(refreshTime, 1000);
  </script>