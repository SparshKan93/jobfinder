import React  , { useContext }from 'react';  
import postContext from '../context/posts/postContext';
import PostCard from './PostCard';


const JobPosts = () => {
    const context = useContext(postContext);
    const {posts} = context;
    return (
        <div style= {{display: 'flex'}} >
            <div style={{ width: 300, height: 600, margin:(25, 25, 0, 25), background: '#D9D9D9', borderRadius: 24 }} />
            {posts.map((post)=>{
                return <PostCard key={post._id} post={post} />
            })}
        </div>
        // <div style={{ marginLeft: 205, height: '100%', top:-100, position: 'relative', background: 'white' }}>   
        //     <div style={{ left: 129, top: 271, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Suggest similar jobs with toggle</div>
        //     <div style={{ left: 220, top: 190, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>filters</div>
        //     <div style={{ left: 415, top: 154, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Showing results number</div>
        //     <div style={{ width: 287, height: 38, left: 758, top: 43, position: 'absolute' }}>
        //         <div style={{ width: 28, height: 28, left: 247, top: 5, position: 'absolute' }}>
        //         </div>
        //     </div>

        //     
            
        // </div>
    )
}

export default JobPosts