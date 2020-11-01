import { FormatItalic } from '@material-ui/icons';
import * as React from 'react';
import Title from '../utils/Title';

interface ExperiencesProps {
    WorkPosition: String,
    Company: String,
    Date: String,
    Description: String,
}

export default function Experiences(props: ExperiencesProps) {
    const workpositionStyle: React.CSSProperties = {
        fontFamily: 'Lato',
        letterSpacing: 1,
        fontSize: 21,
        fontWeight: 'bold',
        color: '#fff',
        borderBottom: '3px solid #0B56C7',
        marginBottom: '10px'

    }

    const companyStyle: React.CSSProperties = {
        fontFamily: 'Lato',
        letterSpacing: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#999',
        fontStyle: 'italic'
    }
    const dateStyle: React.CSSProperties = {
        fontFamily: 'Lato',
        letterSpacing: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#999',
        fontStyle: 'italic'

    }
    const descriptionStyle: React.CSSProperties = {
        fontFamily: 'Lato',
        letterSpacing: 1,
        fontSize: 16,
        color: '#fff',
        marginBottom: '65px'
    }
    return <>
        <div style={workpositionStyle}>{props.WorkPosition}</div>
        <div style={companyStyle}>{props.Company}</div>
        <div style={dateStyle}>{props.Date}</div>
        <div style={descriptionStyle}>{props.Description}</div>
    </>
}