import React from 'react';
import MathJax from 'react-mathjax2';

const DisplayContent = ({content}) => (
    <div className='display-content'>
        <MathJax.Context input='ascii'>
            <div>
            {
                (content ? content.toString().split('-v-') : []).map((i, index) => {
                    switch(i.length > 3 && i.substring(0, 3)) {
                        case 'Fml': return <MathJax.Node inline key={index}>{ i.substring(3, i.length) }</MathJax.Node>;
                        case 'Img': return <img key={index} src={process.env.PUBLIC_URL + `/images/${i.substring(3, i.length)}`} alt=''/>
                        default: return <span key={index} dangerouslySetInnerHTML={{__html: i}}/>
                    }
                })
            }
            </div>
        </MathJax.Context>
    </div>
);

export default DisplayContent;