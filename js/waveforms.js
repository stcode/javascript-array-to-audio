
var waveforms={};
var wi=0,wj=0;
waveforms.wf10=[];
waveforms.wf14=[];
waveforms.wf15=[];
waveforms.wf16=[];
waveforms.wf20=[];

/* 1 second at 44100Hz (ch1, ch2 is just low) of a 50hz wave at 10% duty cycle = 882 points/period, 88 high and 794 low */
for(wj=0;wj<50;wj++)
{

for(wi=0;wi<882;wi++)
{
  if(wi<(882/10))
  {
    waveforms.wf10.push(200);
    waveforms.wf10.push(1);
  }
  else
  {
    waveforms.wf10.push(1);
    waveforms.wf10.push(1);
  }
  if(wi<(882/14))
  {
    waveforms.wf14.push(200);
    waveforms.wf14.push(1);
  }
  else
  {
    waveforms.wf14.push(1);
    waveforms.wf14.push(1);
  }
  if(wi<(882/15))
  {
    waveforms.wf15.push(200);
    waveforms.wf15.push(1);
  }
  else
  {
    waveforms.wf15.push(1);
    waveforms.wf15.push(1);
  }
  if(wi<(882/16))
  {
    waveforms.wf16.push(200);
    waveforms.wf16.push(1);
  }
  else
  {
    waveforms.wf16.push(1);
    waveforms.wf16.push(1);
  }
  if(wi<(882/20))
  {
    waveforms.wf20.push(200);
    waveforms.wf20.push(1);
  }
  else
  {
    waveforms.wf20.push(1);
    waveforms.wf20.push(1);
  }
}

}

