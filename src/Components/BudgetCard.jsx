import React from 'react'
import { Button, Card, ProgressBar, Stack } from 'react-bootstrap'
import { currencyFormatter } from './Utils'



const BudgetCard = ({ name, amount, max, gray }) => {

    const classNames = []
    if(amount > max){
        classNames.push('bg-danger', 'bg-opacity-10')
    }else if(gray){
        classNames.push('bg-light')
    }
    return (
        <>
            <Card className={classNames.join(" ")}>
                <Card.Body>
                    <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
                        <div className='me-2'>{name}</div>
                        <div className='d-flex align-items-baseline'>
                            {currencyFormatter.format(amount)}
                            <span className='text.muted fs-6 ms-1'>/ {currencyFormatter.format(max)}</span>
                        </div>
                    </Card.Title>
                    <ProgressBar variant={getProgressBarVariant(amount, max)}
                    min={0}
                    max={max}
                    now={amount}
                    className='rounded-pill'/>
                    <Stack direction='horizontal' gap='2' className='mt-4'>
                        <Button className='ms-auto' variant='outline-success'>Add Expense</Button>
                        <Button variant='outline-secondary'>View Expense</Button>
                    </Stack>
                </Card.Body>
            </Card>
        </>
    )
}

function getProgressBarVariant(amount, max) {
    const ratio = amount / max
    if (ratio < .5) return "success"
    if (ratio < .75) return "warning"
    return "danger"
}

export default BudgetCard