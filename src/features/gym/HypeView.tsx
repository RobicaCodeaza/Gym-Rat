import { DotLottieReact } from '@lottiefiles/dotlottie-react'

function HypeView() {
    return (
        <div className="flex-1 rounded-xl shadow-lg shadow-cod-gray-100/5 backdrop-blur-md">
            {/* <img
                src={hypePhoto}
                alt="hype"
                className="h-1/2 w-1/2 object-contain"
            ></img> */}
            <DotLottieReact autoplay src="/gym.lottie" loop></DotLottieReact>
        </div>
    )
}

export default HypeView
