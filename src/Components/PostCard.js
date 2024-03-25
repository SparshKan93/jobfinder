import React from 'react'

const PostCard = (props) => {
    const { post } = props;
    return (
        <div  className='my-3'> 
            <div style={{width: '100%', height: '100%', paddingLeft: 24, paddingRight: 24, paddingTop: 20, paddingBottom: 20, background: 'white', borderRadius: 24, overflow: 'hidden', border: '1px rgba(0, 0, 0, 0.50) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 11, display: 'flex'}}>
        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
            <div style={{width: 61, height: 61, background: '#D9D9D9', borderRadius: 9999}} />
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 559, display: 'inline-flex'}}>
                    <div style={{color: 'black', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>{post.role}</div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <div style={{width: 12, height: 18, left: 6, top: 3, position: 'absolute', border: '1.50px black solid'}}></div>
                    </div>
                </div>
                <div style={{color: 'black', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>Google</div>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 94, display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 14.19, height: 18.02, left: 4.90, top: 3, position: 'absolute', background: '#555555'}}></div>
                        </div>
                        <div style={{color: '#555555', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>Delhi</div>
                    </div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: '#555555'}}></div>
                        </div>
                        <div style={{color: '#555555', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>Duration</div>
                    </div>
                </div>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 78, display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 7, height: 7, left: 8.50, top: 12.50, position: 'absolute', background: '#555555'}}></div>
                            <div style={{width: 21, height: 21.34, left: 1.50, top: 0.66, position: 'absolute', background: '#555555'}}></div>
                        </div>
                        <div style={{color: '#555555', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>Unpaid</div>
                    </div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                        <div style={{width: 20, height: 20, position: 'relative'}}>
                            <div style={{width: 17, height: 13.50, left: 1.50, top: 3.50, position: 'absolute', background: '#555555'}}></div>
                        </div>
                        <div style={{color: '#555555', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>1233 applicants</div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{justifyContent: 'flex-start', alignItems: 'flex-end', gap: 573, display: 'inline-flex'}}>
            <div style={{color: '#555555', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>Posted 3 days ago</div>
            <div style={{paddingLeft: 41, paddingRight: 41, paddingTop: 15, paddingBottom: 15, background: '#2539F0', borderRadius: 8, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{color: 'white', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>Apply now</div>
            </div>
        </div>
    </div>
</div>
            {/* <div style={{ 
                marginTop: '10px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center' 
            }}>
                <div style={{ 
                    fontSize: '0.8rem', 
                    color: '#555555' 
                }}>Posted 3 days ago</div>
                <button style={{ 
                    padding: '8px 16px', 
                    background: '#2539F0', 
                    color: 'white', 
                    borderRadius: '4px', 
                    border: 'none' 
                }}>Apply now</button>
            </div> */}
        {/* <div style={{ width: 925, paddingLeft: 24, paddingRight: 24, paddingTop: 20, paddingBottom: 20, position: 'absolute', background: 'white', borderRadius: 24, overflow: 'hidden', border: '1px rgba(0, 0, 0, 0.50) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 11, display: 'flex' }}>
            <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                <div style={{ width: 61, height: 61, background: '#D9D9D9', borderRadius: 9999 }} />
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex' }}>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 559, display: 'inline-flex' }}>
                        <div style={{ color: 'black', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word' }}>{post.role}</div>
                        <div style={{ width: 24, height: 24, position: 'relative' }}>
                            <div style={{ width: 12, height: 18, left: 6, top: 3, position: 'absolute', border: '1.50px black solid' }}></div>
                        </div>
                    </div>
                    <div style={{ color: 'black', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>{post.companyName}</div>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 94, display: 'inline-flex' }}>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex' }}>
                            <div style={{ width: 24, height: 24, position: 'relative' }}>
                                <div style={{ width: 14.19, height: 18.02, left: 4.90, top: 3, position: 'absolute', background: '#555555' }}></div>
                            </div>
                            <div style={{ color: '#555555', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>Delhi</div>
                        </div>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex' }}>
                            <div style={{ width: 24, height: 24, position: 'relative' }}>
                                <div style={{ width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: '#555555' }}></div>
                            </div>
                            <div style={{ color: '#555555', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>Duration</div>
                        </div>
                    </div>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 78, display: 'inline-flex' }}>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex' }}>
                            <div style={{ width: 24, height: 24, position: 'relative' }}>
                                <div style={{ width: 7, height: 7, left: 8.50, top: 12.50, position: 'absolute', background: '#555555' }}></div>
                                <div style={{ width: 21, height: 21.34, left: 1.50, top: 0.66, position: 'absolute', background: '#555555' }}></div>
                            </div>
                            <div style={{ color: '#555555', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>Unpaid</div>
                        </div>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
                            <div style={{ width: 20, height: 20, position: 'relative' }}>
                                <div style={{ width: 17, height: 13.50, left: 1.50, top: 3.50, position: 'absolute', background: '#555555' }}></div>
                            </div>
                            <div style={{ color: '#555555', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>1233 applicants</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ justifyContent: 'flex-start', alignItems: 'flex-end', gap: 573, display: 'inline-flex' }}>
                <div style={{ color: '#555555', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>Posted 3 days ago</div>
                <div style={{ paddingLeft: 41, paddingRight: 41, paddingTop: 15, paddingBottom: 15, background: '#2539F0', borderRadius: 8, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                    <div style={{ color: 'white', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word' }}>Apply now</div>
                </div>
            </div>
        </div>
        </div>  */}
            
         
              </div> 
    )
}

export default PostCard;
