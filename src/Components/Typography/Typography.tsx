import React from 'react';
import './Typography.css'

interface TextProps {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label',

    style_type: 'text-title' | 'text-subtitle' | 'text-label' | 'text-p',

    styles_color?: 'text-gris' | 'text-violeta' | 'text-blanco',

    style_transform?: 'text-uppercase' | 'text-capitalize',

    size?: 'text-small' | 'text-medium' | 'text-large' | 'text-auto',

    content: string,
}

export const Text = (props: TextProps) => {
    const classNames = ` ${props.style_type || ''} ${props.style_transform || ''} ${props.styles_color || 'text-primary'} ${props.size || ''}`;

    return React.createElement(props.type, { className: classNames }, props.content);
}