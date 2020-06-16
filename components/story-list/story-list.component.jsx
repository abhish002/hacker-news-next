import React from 'react';
import Story from '../story/story.component';

export const StoryList = ({ stories }) => {
    return (
        <div style={{ padding: "0 1em" }}>
            {
                stories.map(story => (
                    <Story key={story.id} story={story} />
                ))
            }
        </div>
    )
}

export default StoryList;
