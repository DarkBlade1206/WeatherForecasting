import React from "react";
function Header(){return <div class="top-container">
<h1>Gandhi Nagar, DL</h1>

  <table class= "center">
    <tr>
      <td rowspan="2"><i class="icon fas fa-circle fa-4x"></i></td>
      <td rowspan="2"><p class="degree">33<span>&#176;</span> </p></td>
      <td><button type="button" class="btn btn-lg"  >C</button></td>
    </tr>

    <tr>
      <td><button type="button" class="btn btn-lg">F</button></td>
    </tr>
  </table>

  <p class="wind">Haze</p>

  <p class="update-text">Updated as of 19:05</p>

  feels like 35°<span></span> Wind 13km/h

</div>
}
export default Header;
