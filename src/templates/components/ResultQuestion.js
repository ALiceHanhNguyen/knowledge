import React from 'react';
import MathJax from 'react-mathjax2';

import {knowledgeAttrs} from '../../const';

export const ResultQuestion = ({data}) => {
  const dataShow = [];
  (data || []).map(d => {
    const dataArr = [];
    knowledgeAttrs.map(item => {
      if (d[item.title]) {
        const content = d[item.title].replaceAll('margin-top: 0', 'margin-top: 0;display: inline-block;');
        dataArr.push({content: content.split('-v-'), name: item.name});
      }
      return item;
    });
    dataShow.push({data: dataArr, ten: d.ten});
    return d;
  });
  
  return (
    <div>
      {dataShow.map((ds, is) => {
        return (
          <div className='answer-session' key={is}>
            {ds.ten && <h3 className='text-orange'>{ds.ten}</h3>}
            {(ds.data || []).map((content, index)=> {
              return (
                <div key={index}>
                  <div className='title font-weight-bold pb-2'>{content.name}</div>
                  <MathJax.Context input='ascii'>
                    <div className='content'>
                      {
                        content.content.map((item, index) => {
                          switch(item.length > 3 && item.substring(0, 3)) {
                            case 'Fml': return <MathJax.Node inline key={index}>{ item.substring(4, item.length) }</MathJax.Node>;
                            case 'Img': return <img key={index} src={process.env.PUBLIC_URL + `/images/assets/${item.substring(4, item.length)}`} alt={item.substring(4, item.length)}/>
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
        )
      })}
    </div>
  );
}
