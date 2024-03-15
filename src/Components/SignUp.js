import React from 'react'
import '../App.css';

const SignUp = () => {
    return (
        <div className='signUpBody'>
            <div className='signUpBox' >
                <div className='bigCircle ' />
                <div style={{ left: 1080, top: 497, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Want to land a job?<br />start your journey Today!</div>
                <div className = 'smallCircle' />
                <div style={{ left: 1002, top: 401, position: 'absolute', color: 'white', fontSize: 64, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Job post</div>
                <div style={{ width: 507, height: 545, left: 115, top: 167, position: 'absolute' }}>
                    <div style={{ left: 3, top: 0, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Get Started !</div>
                    <div style={{ width: 507, height: 39, left: 0, top: 141, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex' }}>
                        <div style={{ color: '#525252', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Username</div>
                            <input style={{ position: 'absolute', width: 507, height: 28, border: '1px black solid', top: 23}} type="text" />
                    </div>
                    <div style={{ width: 507, height: 39, left: 0, top: 208, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex' }}>
                        <div style={{ color: '#525252', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Email</div>
                        <input style={{ position: 'absolute', width: 507, height: 28, border: '1px black solid', top: 28}} type="text" />
                    </div>
                    <div style={{ width: 507, height: 39, left: 0, top: 275, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex' }}>
                        <div style={{ color: '#525252', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Phone Number</div>
                        <input style={{ position: 'absolute', width: 507, height: 28, border: '1px black solid', top: 29}} type="text" />
                    </div>
                    <div style={{ left: 4, top: 54, position: 'absolute', color: '#727272', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Please enter your details</div>
                    <div style={{ width: 506, height: 67, left: 1, top: 478, position: 'absolute' }}>
                        <div style={{ width: 506, height: 67, left: 0, top: 0, position: 'absolute', background: '#3B62FF', borderRadius: 8 }} />
                        <div style={{ width: 92, left: 207, top: 19, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Sign Up</div>
                    </div>
                </div>
                <div style={{ width: 507, left: 115, top: 517, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 409, display: 'inline-flex' }}>
                    <div style={{ color: '#525252', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Password</div>
                    <input style={{ position: 'absolute', width: 507, height: 28, border: '1px black solid', top: 30}} type="text" />
                    <div style={{ width: 507, height: 0, border: '1px black solid' }}></div>
                    <div style={{ width: 21, height: 21, position: 'relative' }}>
                        <div style={{ width: 20.62, height: 13.18, left: '-398px', top: 4, position: 'absolute' }}>
                            <div style={{ width: 20.62, height: 6.59, left: 0, top: 0, position: 'absolute', border: '1.87px #727272 solid' }}></div>
                            <div style={{ width: 20.62, height: 6.59, left: 0, top: 6.59, position: 'absolute', border: '1.87px #727272 solid' }}></div>
                            <div style={{ width: 5.62, height: 4.94, left: 7.50, top: 4.12, position: 'absolute', border: '1.87px #727272 solid' }}></div>
                        </div>
                        <div style={{ width: 29.70, height: 0, left: '-398px', top: 21, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0', border: '1px #7E7E7E solid' }}></div>
                    </div>
                </div>
                <div style={{ left: 251, top: 732, position: 'absolute' }}><span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Already have an account?</span><span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}> </span><span style={{ color: '#3B62FF', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Login</span></div>
            </div>
        </div>
    )
}

export default SignUp