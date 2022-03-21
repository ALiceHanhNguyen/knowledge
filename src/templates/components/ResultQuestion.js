import React from 'react';
import MathJax from 'react-mathjax2';

import {knowledgeAttrs} from '../../const';

export const ResultQuestion = ({data}) => {
  const dataArr = [];
  knowledgeAttrs.map(item => {
    if (data[item.title]) {
      dataArr.push({content: data[item.title].split('-v-'), name: item.name});
    }
    return item;
  });
  return (
    <div className='answer-session'>
      {data.ten && <h3 className='text-orange'>{data.ten}</h3>}
      {(dataArr || []).map((content, index)=> {
        return (
          <div key={index}>
            <div className='title font-weight-bold pb-2'>{content.name}</div>
            <MathJax.Context input='ascii'>
              <div>
                {
                  content.content.map((item, index) => {
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
        )
      })}
    </div>
  );
}
