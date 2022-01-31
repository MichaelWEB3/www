import styled from "styled-components";
import { SCREEN_SIZES } from '../../utils/screen';

export const Menu = styled.div`

	display: flex;
	flex-direction: column;
	width: 230px;
	/* margin-left: 195px; */
	/* margin-left: 10px; */

	@media (max-width: ${SCREEN_SIZES.sm}) {
		margin: 10px 0 10px 20px;
		width: 200px;
		
	}
      

   .Heart{
     width: 30px;
     height: 30px;
     color: #fff;
        
		}

	.Button{

		width: 100%;
		height: 40px;
		margin-bottom: 10px;
		
		@media (max-width: ${SCREEN_SIZES.sm}) {
		margin-top: 10px;
		margin-bottom: 0;
		
		}
		
	
	}


`

export const MenuItem = styled.div`

	display: flex;
	align-items: center;
	margin: 0 0 15px 0;
	cursor: pointer;
	padding: 2px;
	&:hover {
	padding-left: 4px;
	font-weight: bold;
	background: #656565;
	border-radius: 8px;

	}

	.IconBackground{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	background-color:#FFFFFF;
	border-radius: 50%;

	}
		


	.MenuIcon{
			
		width: 16px;
		height: 16px;
		color: #000;


	} 
		
	.Heart{
				
		
		width: 30px;
		height: 30px;
		
				
		}
		
	.MenuIconInfo{
				
		width: 100%;
		height: 100%;
		color: #000;
				
		}

	.MenuText{
			
		font-family: Spinnaker;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		
		display: flex;
		align-items: center;
		text-align: center;
		letter-spacing: 0.1em;
		margin: 10px;

		color: #FFFFFF;
	}

	@media (max-width: ${SCREEN_SIZES.sm}) {

	margin-bottom: 5px;
	padding-left: 4px;

	.MenuText{
		font-size: 12px;
		line-height: 10px;
	}

	.IconBackground{
		width: 25px;
		height: 25px;
	}

	.MenuIcon{
		width: 14px;
		height: 14px;
	}

	.Heart{
		width: 25px;
		height: 25px;
	}

}

		
`