import React, { useState } from 'react'
import InputContainer from '../SmallContainer/InputContainer'
const SignUpcomponent = ({formData,setFormData,errors}) => {
  const handleChange=(e)=>{
    
    const {name,value}=e.target;
    setFormData({ ...formData,[name]:value })
  }

  return (
    <div>
      <InputContainer label="Username" name="username" value={formData.username} onChange={(e)=>handleChange(e)} />
      {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      <InputContainer label="Full Name" name="fullName" value={formData.fullName} onChange={(e)=>handleChange(e)} />
      {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName}</p>}
      <InputContainer label="Email" type="email" name="email" value={formData.email} onChange={(e)=>handleChange(e)} />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

      <InputContainer label="Password" type="password" name="password" value={formData.password} onChange={(e)=>handleChange(e)} />
      {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

      <InputContainer label="Summary" type="text" name="summary" value={formData.summary} onChange={(e)=>handleChange(e)} />
      {errors.summary && <p style={{ color: 'red' }}>{errors.summary}</p>}

    </div>
  )
}

export default SignUpcomponent