import { style } from '@vanilla-extract/css'

export const buttonStyle = style({
        backgroundColor:'#3DD1E7',
        border: '0 solid #E5E7EB',
        boxSizing: 'border-box',
        color: '#000000',
        display: 'flex',
        fontFamily: 'ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        fontSize: '1rem',
        fontWeight: 700,
        justifyContent: 'center',
        lineHeight: '1.75rem',
        padding: '.75rem 1.65rem',
        position: 'relative',
        textAlign: 'center',
        textDecoration: 'none #000000 solid',
        textDecorationThickness: 'auto',
        width: '100%',
        maxWidth: '460px',
        cursor: 'pointer',
        transform: 'rotate(-2deg)',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation',
        ':focus': {
            outline: 0
        },
        ':after': {
            content: '',
            position: 'absolute',
            border: '1px solid #000000',
            bottom: '4px',
            left: '4px',
            width: 'calc(100% - 1px)',
            height: 'calc(100% - 1px)',
        },
        selectors: {
            '&:hover:after': {
                bottom: '2px',
                left: '2px'
            }
        },
        '@media': {
            '(min-width: 768px)': {
                padding: '.75rem 3rem',
                fontSize: '1.25rem'
            }
        }
})
