import React from 'react'
import useDragger from '../hooks/useDragger';

interface NoteBookProps extends React.ComponentPropsWithRef<'div'> {
    id: string | undefined;
    icon: React.ReactNode;
    title: string;
    description: string;
    color?: string;
    createdAt: string | number;
}

const NoteBook = React.forwardRef<HTMLDivElement, NoteBookProps>(
    ({ id, icon, title, description, createdAt, ...props }, ref) => {

        useDragger(id);

        return (
            <div {...props} className={`notebook ${props.className || ''}`} ref={ref}>
                <div className="icon">{icon}</div>
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
                <span className="createdAt">{createdAt}</span>
            </div>
        )
    }
);

NoteBook.displayName = 'NoteBook';

export default NoteBook;