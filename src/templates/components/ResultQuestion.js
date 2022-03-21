import React from 'react';
import MathJax from 'react-mathjax2';

const ResultQuestion = ({answer}) => {
  const arr = answer.lythuyet ? answer.lythuyet.value.split('-v-') : [];
  return (
    <div className='answer-session'>
      <h3>{ answer.tieude ? answer.tieude.value : '' }</h3>
      <MathJax.Context input='ascii'>
        <div>
          {
            arr.map((item, index) => {
              switch(item.length > 3 && item.substring(0, 3)) {
                case 'Fml': return <MathJax.Node inline key={index}>{ item.substring(3, item.length) }</MathJax.Node>;
                case 'Img': return <img key={index} src={process.env.PUBLIC_URL + `/images/${item.substring(3, item.length)}`} alt=''/>
                default: return <span key={index} dangerouslySetInnerHTML={{__html: item}}/>
              }
            })
          }
        </div>
      </MathJax.Context>
    </div>
  );
}

export default ResultQuestion;