import styled from 'styled-components';

import { SCREEN_SIZES } from '../../utils/screen';

export const Container = styled.div`
	background-color: #1b1b1b;
	width: 100%;
	align-items: center;
	justify-content: center;
	height: 75vh;
	padding-top: 8vh;
	margin-bottom: 10vh;

	@media only screen and (min-height: 1000px) and (max-width: 1000px) {
		height: 60vh;
		padding-top: 0;
		margin-bottom: 50vh;
	}

	@media only screen and (max-width: 1024px) {
		height: auto;
		padding-top: 0px;
		margin-bottom: 0px;
	}	

	@media only screen and (min-width: 1300px) {
		height: 62vh;
	}

	@media only screen and (min-width: 1599px) {
		height: 65vh;
	}

	@media only screen and (min-width: 1900px) {
		height: 67vh;
	}

	@media only screen and (min-height: 1400px) {
		height: 65vh;

	}

	

	iframe {

		height: 500px;

		@media only screen and (min-height: 1000px) and (max-width: 1000px) {
			width: 100vw;
			height: auto;
		}

		@media only screen and (max-width: 900px) {
			width: 100vw;
			max-height: 200px;
			margin: 0px;
			padding: 0px;
		}

		@media only screen and (min-width: 1400px) {
			height: 550px;
			margin: 0px;
			padding: 0px;
		}

		@media only screen and (min-width: 1900px) {
			height: 700px;

		}

		@media only screen and (min-height: 1000px) {
			height: 700px;
			margin: 0px;
			padding: 0px;
		}

		@media only screen and (min-height: 1400px) and (min-width: 2500px) {
			height: 900px;
		
		}

		

		
	}
	
	
	.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
		bottom: 30px;
		left: 0;
		width: 100%;
	}
	.swiper-pagination-bullet {
		border: 1px solid #fff;
		background: transparent;
		opacity: 1;
		padding: 5px;
	}
	
	.swiper-pagination-bullet-active {
			background: ${({theme}) => theme.palette.primary.main};
			border: none
}

	.swiper-container {
      max-width: 100%;
    }

	.swiper-slide {
		img {
			width: 100%;
			object-fit: cover;
			height: calc(100vh - 20px);
			background-position: center center;
			background-repeat: no-repeat;
			background-size: cover;

			@media only screen and (max-width: 1270px) {
				display: none;
			}	
		}

		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}

	@media (max-width: ${SCREEN_SIZES.md}) {
	.swiper-container {
      max-width: 100%;
    }

	.swiper-slide {
		img {
			width: 100%;
			//object-fit: cover;		
			
			@media only screen and (max-width: 1270px) {
				display: none;
			}	
		}
	}
	}

	@media (max-width: ${SCREEN_SIZES.sm}) {
	.swiper-container {
      max-width: 100%;
	  height: auto;
    }

	.swiper-slide {
		img {
			width: 100%;
			object-fit: fill;		
			
			@media only screen and (max-width: 1270px) {
				display: none;
			}	
		}
	}
	  }
`;

export const MainBanner = styled.div`

	  margin-top: -25px;

	@media only screen and (min-width: 1271px) {
		display: none;
		width: 100%;
	}	


	@media only screen and (max-width: 1280px) {
		width: 100%;
		height: 600px;
		background-image: url(../../assets/banner1.png);
		background-repeat: no-repeat;
		background-position: center;
		z-index: 50;
	}	

	@media only screen and (max-width: 900px) {    

		background-image: url(../../assets/banner_mobile_md.jpg);
		background-repeat: no-repeat;
		background-position: 50% 100%; 
		z-index: 50;

	}

	@media only screen and (max-width: 480px) {    

		background-image: url(../../assets/banner_mobile.jpg);
		background-repeat: no-repeat;
		background-position: 20% 100%; 
		z-index: 50;
    
  	}

  
`;