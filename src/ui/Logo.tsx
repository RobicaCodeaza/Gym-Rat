import logo from '../../public/logo.png'

type LogoTypePhone = {
    height: 'small' | 'medium' | 'big' | 'bigger' | 'biggest'
}

function Logo({ height }: LogoTypePhone) {
    return (
        <div>
            <img
                className={` ${height === 'medium' && 'h-12 phone:h-14 tab-land:h-16'} ${height === 'big' && 'h-12 phone:h-16 tab-port:h-20 tab-land:h-24'} ${height === 'small' && 'h-14'} ${height === 'bigger' && 'h-44'} ${height === 'biggest' && 'h-56'}`}
                alt="Logo"
                src={logo}
            ></img>
        </div>
    )
}

export default Logo
