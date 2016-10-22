alexa-hack - our project for the hackathon

curl -X POST http://alexaphillyhack.herokuapp.com/api/readings/ -d "systolic=120" -d "diastolic=80" -d "pulse=68"
{
  "status": "success",
  "data": {
    "message": "Normal"
  }
}

Return from endpoint /api/readings/ = diagnosis message.  Simple text.

Can be passed, e.g.,:
{
  systolic: "80",
  diastolic: "120",
  pulse: "68",
}
