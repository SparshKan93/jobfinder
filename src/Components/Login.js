import React from 'react'
import '../App.css';

const Login = () => {
    return (
        <div className='signUpBody'>
            <div className='signUpBox' >
                <div style={{ width: 942, height: 942, left: 720, top: 41, position: 'absolute', background: '#3B62FF', borderRadius: 9999 }} />
                <div style={{ left: 1080, top: 497, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Want to land a job?<br />start your journey Today!</div>
                <div style={{ width: 451, height: 451, left: 1143, top: 680, position: 'absolute', background: '#789EFF', borderRadius: 9999 }} />
                <div style={{ left: 1002, top: 401, position: 'absolute', color: 'white', fontSize: 64, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Job post</div>
                <div style={{ width: 507, height: 437, left: 115, top: 221, position: 'absolute' }}>
                    <div style={{ left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Welcome back !</div>
                    <div style={{ width: 507, height: 39, left: 0, top: 141, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex' }}>
                        <div style={{ color: '#525252', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Email / Phone Number</div>
                        <input style={{ position: 'absolute', width: 507, height: 28, border: '1px black solid', top: 29}} type="text" />
                    </div>
                    <div style={{ left: 351, top: 310, position: 'absolute', color: '#3B62FF', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>FORGOT YOUR PASSWORD</div>
                    <div style={{ left: 1, top: 54, position: 'absolute', color: '#727272', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Welcome back! Please enter your details</div>
                    <div style={{ width: 507, height: 39, left: 0, top: 248, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex' }}>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 396, display: 'inline-flex' }}>
                            <div style={{ color: '#525252', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Password</div>
                            <div style={{ width: 20.62, height: 13.18, position: 'relative', left: 15 }}>
                                <div style={{ width: 20.62, height: 6.59, left: 0, top: 0, position: 'absolute', border: '1.87px #727272 solid' }}></div>
                                <div style={{ width: 20.62, height: 6.59, left: 0, top: 6.59, position: 'absolute', border: '1.87px #727272 solid' }}></div>
                                <div style={{ width: 5.62, height: 4.94, left: 7.50, top: 4.12, position: 'absolute', border: '1.87px #727272 solid' }}></div>
                            </div>
                        </div>
                        <input style={{ position: 'absolute', width: 507, height: 28, border: '1px black solid', top: 29}} type="text" />
                    </div>
                    <div style={{ width: 506, height: 67, left: 1, top: 370, position: 'absolute' }}>
                        <div style={{ width: 506, height: 67, left: 0, top: 0, position: 'absolute', background: '#3B62FF', borderRadius: 8 }} />
                        <div style={{ width: 70.73, left: 217.63, top: 19, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Login</div>
                    </div>
                </div>
                <div style={{ width: 29.70, height: 0, left: 587, top: 489, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0', border: '1px #7E7E7E solid' }}></div>
                <div style={{ left: 249, top: 678, position: 'absolute' }}><span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Don’t have an account?</span><span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}> </span><span style={{ color: '#3B62FF', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Sign up</span></div>
            </div>
        </div>
    )
}

export default Login