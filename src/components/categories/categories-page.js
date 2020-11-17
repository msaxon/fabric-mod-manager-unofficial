import React from 'react';
import {categories} from '../../data/categoryIds';

export default function CategoriesPage() {
    
    const root = {
        name: 'Root',
        id: null
    }

    console.log('root', root);

    const setChildren = node => {
        console.log('setChildren: ', node);
        const children = categories.filter(c => {
            return c.parentGameCategoryId == node.id;
        });
        console.log('childrenCount', children.length)
        if(children.length === 0) {
            node.children = undefined;
        } else {
            node.children = children;
            children.forEach(child => setChildren(child));
        }
    }

    setChildren(root);

    console.log('root afterwards', root);

    const renderTree = parent => {
        if(parent.children) {
            return (
                <>
                    <li>{parent.name}</li>
                    <ul>
                        {parent.children.map(c => {
                            return renderTree(c);
                        })}
                    </ul>
                </>
            );
        } else {
            return (
                <li>{parent.name}</li>
            );
        }
    }

    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {renderTree(root)}
            </ul>
        </div>
    );
}