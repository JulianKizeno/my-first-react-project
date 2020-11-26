import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import gifImages from './images/me.gif'
import UserCard from "./components/UserCard"

ReactDOM.render(
  	<React.StrictMode>
		<UserCard 
			gifImg = {gifImages}
			imgAlt = 'images gif'
			userName = 'Julian Quiceno'
			profession = 'Frontend Developer'
			textCard = '“ I am a junior web developer focused on advancing my professional career. I am responsible, communicative and I adapt easily to work teams. This is why I am looking for an opportunity to be part of a company. "'  
		/>	
  	</React.StrictMode>,
  	document.getElementById("root")
);
