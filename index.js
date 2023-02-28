window.onload = function() {


    //NAVBAR
    document.getElementById('logo').src="assets/img/logo.png";
    document.getElementById('links').innerHTML = '<a href="index.html">Home</a> <a href="about.html">About me</a> <a href="contacts.html">Contact us</a>'

    //BANNER
    document.getElementById('banner').src="assets/img/banner.jpg";

    //MAIN CONTENT
    let bioTitle = "Hi, Im Phomelelo Mafolo";
    let subTitle = "About Me!";
    let aboutDescription ="I am a Motivated and dependable, Information and Communication Technology graduate with a diverse experience in government. <br>My background includes System Applications,Help Desk, Information Management and providing IT support to users. <br>I have the excellent ability to organise and prioritise my worklosd to achieve set goals and deadlines in the most efficient manner." ;
    

    document.getElementById("bio-title").innerHTML = bioTitle;
    document.getElementById("sub-title").innerHTML = subTitle;
    document.getElementById("about-description").innerHTML = aboutDescription;
    document.getElementById('image-profile').src="assets/img/profile.jpg";


    //FOOTER
    document.getElementById('footer').innerHTML = '<table width="100%"> <tr><td><h3>Address</h3><hr width="200px"><p> Polokwane, <br> Burgersfort</p></td> <td><h3>Quick Links</h3><hr width="200px"><ul> <li><a href="">About</a></li><li><a href="">Contact us   </a></li> </ul><br></td><td><h3>Contact us</h3><hr width="200px"><p>Cell: 067 877 6553</p><p>Email:mashaimoraba.88@gmail.com</p></td><td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.4316889640045!2d27.944177015030306!3d-26.215159383432933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950a1ee1d0e155%3A0xd85afeff8e7c2bec!2s144%20New%20Canada%20Rd%2C%20Randburg%2C%201709!5e0!3m2!1sen!2sza!4v1602409193877!5m2!1sen!2sza" width="100%" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></td></tr><br> <tr><td colspan="2"><ul style="display: inline-flex; gap: 10px;"><li><a href="https://www.facebook.com/princess.phumimashaimafolo"><i class="fab fa-facebook fa-2x" style="color:#ffffff"></i></a> </li><li ><a href="https://www.linkedin.com/in/phomelelo-mafolo-328966175/"><i class="fab fa-linkedin fa-2x" style="color:#ffffff"></i></a> </li><li><a href="#"><i class="fab fa-twitter-square fa-2x" style="color:#ffffff"></i></a> </li> </ul></td></tr> </table><br><table style="text-align: center; width: 100% ;"><tr> <td>Copyright ©2023 All rights reserved</td></tr></table> '

}