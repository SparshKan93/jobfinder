import React from 'react'

const PostCard = (props) => {
    const { post } = props;
    const providedDate = post.date;

    // Convert the provided date string to a Date object
    const currentDate = new Date();
    const postedDate = new Date(providedDate);

    // Calculate the difference in milliseconds
    const differenceMs = currentDate - postedDate;

    // Convert the difference from milliseconds to days
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    // Generate the string to display based on the difference
    let displayString;
    if (differenceDays === 1) {
        displayString = "Posted 1 day ago";
    } else {
        displayString = `Posted ${differenceDays} days ago`;
    }

    return (

        <div className='my-3'>
            <div style={{ width: 'fit-content', minWidth: '70%', height: '100%', paddingLeft: 24, paddingRight: 24, paddingTop: 20, paddingBottom: 20, background: 'white', borderRadius: 24, overflow: 'hidden', border: '1px rgba(0, 0, 0, 0.50) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 11, display: 'flex' }}>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                        <div style={{ width: 61, height: 61, background: '#D9D9D9', borderRadius: 9999 }} />
                        <div style={{ width: 12, height: 24, position: 'relative', left: 795 }}>
                            <div style={{ width: 12, height: 18, position: 'absolute', border: '1.50px black solid' }}></div>
                        </div>
                        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex' }}>
                            <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 559, display: 'inline-flex', width: 600 }}>
                                <div style={{ color: 'black', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word' }}>{post.role}</div>
                            </div>
                            <div style={{ color: 'black', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>{post.companyName}</div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ gap: 10, display: 'inline-flex', flexDirection: 'column', marginRight: 150 }}>
                                    <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex' }}>
                                        <div style={{ width: 24, height: 24, position: 'relative' }}>
                                            <div style={{ width: 14.19, height: 18.02, left: 4.90, top: 3, position: 'absolute', background: '#555555' }}></div>
                                        </div>
                                        <div style={{ color: '#555555', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>{post.location}</div>
                                    </div>
                                    <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex' }}>
                                        <div style={{ width: 24, height: 24, position: 'relative' }}>
                                            <div style={{ width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: '#555555' }}></div>
                                        </div>
                                        <div style={{ color: '#555555', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>{post.stipend}</div>
                                    </div>
                                </div>
                                <div style={{ gap: 10, display: 'inline-flex', flexDirection: 'column', marginInline: 40 }}>
                                    <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex' }}>
                                        <div style={{ width: 24, height: 24, position: 'relative' }}>
                                            <div style={{ width: 7, height: 7, left: 8.50, top: 12.50, position: 'absolute', background: '#555555' }}></div>
                                            <div style={{ width: 21, height: 21.34, left: 1.50, top: 0.66, position: 'absolute', background: '#555555' }}></div>
                                        </div>
                                        <div style={{ color: '#555555', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>Duration</div>
                                    </div>
                                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
                                        <div style={{ width: 20, height: 20, position: 'relative' }}>
                                            <div style={{ width: 17, height: 13.50, left: 1.50, top: 3.50, position: 'absolute', background: '#555555' }}></div>
                                        </div>
                                        <div style={{ color: '#555555', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>{post.applicantsNo}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-end', gap: 573, display: 'inline-flex' }}>
                        <div style={{ color: '#555555', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>{displayString}</div>
                        <div style={{ paddingLeft: 41, paddingRight: 41, paddingTop: 15, paddingBottom: 15, background: '#2539F0', borderRadius: 8, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                            <div style={{ color: 'white', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word' }}>Apply now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;
