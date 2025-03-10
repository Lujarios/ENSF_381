import React from 'react';

function Example2(props) {
    return props.list.map(function(item) {
        return (
            <div id={item.objectID}>
            <div> Welcome {props.name}</div>
            <div>
                <a href={item.url}>{item.title}</a>
            </div>
            <div>{item.author}</div>
            <div>{item.num_comments}</div>
            <div>{item.points}</div>
            </div>
        );
    }
    );
}

export default Example2;
