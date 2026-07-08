import "./Story.css";

function Story() {

  const story = [

    {
      year:"2021",
      title:"Started My Journey",
      text:"Began learning programming during my Bachelor of Computer Applications and discovered my passion for software development."
    },

    {
      year:"2022",
      title:"Built My First Website",
      text:"Started building responsive websites using HTML, CSS and JavaScript while exploring frontend development."
    },

    {
      year:"2024",
      title:"Master's Journey",
      text:"Joined MCA and focused on MERN Stack, cloud technologies and building scalable applications."
    },

    {
      year:"2025",
      title:"Real Projects",
      text:"Developed Facility Management System, Virtual Mouse using OpenCV and several full stack applications."
    },

    {
      year:"Today",
      title:"Growing Every Day",
      text:"Continuously learning, solving problems and preparing for Software Development roles."
    }

  ];

  return(

<section className="story" id="journey">

<div className="story-heading">

<p className="section-subtitle">

MY STORY

</p>

<h2 className="section-title">

The road that shaped
my journey.

</h2>

</div>

<div className="story-container">

{

story.map((item,index)=>(

<div className="story-item" key={index}>

<div className="story-year">

{item.year}

</div>

<div className="story-content">

<h3>

{item.title}

</h3>

<p>

{item.text}

</p>

</div>

</div>

))

}

</div>

</section>

)

}

export default Story;