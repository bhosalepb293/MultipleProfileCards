let body = document.body
let section = document.createElement('section')
section.id=`sec`
for(let i=0; i<=100; i++)
{
    section.innerHTML += `<div id= "cards">
<p>Name: Pallavi </P>
<p>Designation: Web Developer</P>
<img id="img1" src="https://www.fnp.com/images/pr/l/v20220719180646/arya-ambekar-personalised-recorded-video-message_1.jpg" alt="" height=200px width=200px>
<h2> Hello I am Pallavi</h2>                
<div>`
}
body.appendChild(section)