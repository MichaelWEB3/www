import React from 'react'
import * as S from './styles'
import {
    FacebookShareButton,
    FacebookIcon,

    WhatsappShareButton,
    WhatsappIcon,

    TelegramShareButton,
    TelegramIcon,

    InstapaperShareButton,
    InstapaperIcon,
} from "react-share";


export default (props) => {
    const shareUrl = props.link || 'http://www.palcoweb.com.br/'

    setTimeout(() => {
        if (props.sair) {
            props.sair(false)
        }

        if (props.sairficha) {
            props.sairficha(false)
        }

    }, 3000)

    return (
        <>
            <S.Container >
                <FacebookShareButton url={shareUrl}  >
                    <FacebookIcon size={30} />
                </FacebookShareButton>

                <WhatsappShareButton url={shareUrl}>
                    <WhatsappIcon size={30} />
                </WhatsappShareButton>

                <TelegramShareButton url={shareUrl}>
                    <TelegramIcon size={30} />
                </TelegramShareButton>

                <InstapaperShareButton url={shareUrl}>
                    <InstapaperIcon size={30} />
                </InstapaperShareButton>
            </S.Container>
        </>
    )
}