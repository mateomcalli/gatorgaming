import {useEffect, useRef, useLayoutEffect } from 'react'

const Comment = ({comments = []}) => {
    const theRef = useRef(null);

    useLayoutEffect(() => {
        if (!theRef.current) return

        const domCurrent = theRef.current
        const domParent = domCurrent.parentNode
        if(!domParent) return
        const commentNodes = comments.map((commentText) => {
            const comment = document.createComment(commentText)
            domParent.insertBefore(comment, domCurrent)
            return comment
        })

        return () => {
            commentNodes.forEach((commentNode) => {
                if (commentNode.parentNode) {
                    commentNode.parentNode.removeChild(commentNode)
                }
            });
            
        };

    });
    return (<span ref={theRef} style={{ display: 'none' }}/>)
}

export default Comment