import React from 'react'

const PostCard = (props) => {
    const { post } = props;
    return (
        <div>
            <div class="card" style={{"width": "18rem"}}>
                <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{post.role}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                    <div class="card-body">
                        {/* <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a> */}
                    </div>
            </div>
            {/* <div style={{ 
            maxWidth: '45%', 
            margin: '10px', 
            border: '1px solid #ccc', 
            borderRadius: '20px', 
            padding: '20px' ,
            marginLeft: 440
        }}>
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '10px' 
            }}>
                <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%', 
                    background: '#D9D9D9', 
                    marginRight: '10px' 
                }} />
                <div>
                    <div style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: '600' 
                    }}>{post.role}</div>
                    <div style={{ 
                        fontSize: '1.2rem', 
                        color: '#555555' 
                    }}>{post.companyName}</div>
                </div>
            </div>
            <div>
                <div><strong>Location:</strong> {post.location}</div>
                <div><strong>Duration:</strong> {post.duration}</div>
                {/* Add more details as needed */}
            {/* </div>
            <div style={{ 
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
            </div>
        </div>
        {/* <div style={{ width: 925, paddingLeft: 24, paddingRight: 24, paddingTop: 20, paddingBottom: 20, left: 415, top: 200, position: 'absolute', background: 'white', borderRadius: 24, overflow: 'hidden', border: '1px rgba(0, 0, 0, 0.50) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
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
        </div> */}
        </div>
    )
}

export default PostCard;
