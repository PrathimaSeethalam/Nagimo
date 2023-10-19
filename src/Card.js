import React from 'react';

function Card(props) {
  const text = [
    {
      text1:"11 climbers came in today",

    },
    {
      text1:"22 new climbers this week",

    },  {
      text1:  "42 hours of activity tracked this week",

    },  {
      text1: "climbers shared their session on social media",

    },  {
      text1: "positive sentiment on climbs has increased by 10% since last week",

    },  {
      text1: "let students know the wall has been freset"

    }
  ]

  return (
    <div>
        <div>
      <div className="card" style={{width: "18rem"}}>
        {/* {
          text.map((t)=>{
            return(
              <p></p>
            )
          })
        } */}
<div className="card-body">
  {/* <h5 className="card-title">Card title</h5> */}
  {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
  <p className="card-text"><strong>+6%</strong> climbers compared to same time & day last week</p>

</div>
</div> 
    </div>
    </div>
  );
}

export default Card;