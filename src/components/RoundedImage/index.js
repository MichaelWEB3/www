import React from 'react'
import * as S from "./styles";



function RoundedImage({ image, photo, name, age, color, width, height, text, editPhoto, onClick }) {

	return (
		<S.Container photo={photo} image={image} color={color} width={width || 201} height={height || 201} onClick={onClick}>
			<div>
				{photo ? (<div className="Photo" />) : (<></>)  }
				{image ? (<div className="Image" />) : (<></>)  }
				
				{editPhoto ? (
					<>
						<p className="editPhoto" onClick={() => { alert("Estou funcionando") }}>editar foto</p>
					</>
				) : (<></>)}

			</div>

			{text ? (
				<>
					<div className="NameAgeBox">
						<p className="Name">{name}</p>
						<p className="Age">{age} anos</p>
					</div>
				</>
			) : (<></>)}

		</S.Container>
	)



}

export default RoundedImage;