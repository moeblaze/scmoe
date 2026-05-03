function formatCurrency(value){return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value||0)}

function getNumberValue(id,fallback=0){const el=document.getElementById(id);const value=parseFloat(el?.value);return Number.isFinite(value)?value:fallback}

function updateEstimateFromInputs(){if(typeof calculateArea==='function')calculateArea()}

function resetDrawing(){path=[];if(polygon){polygon.setMap(null);polygon=null}document.getElementById('baseSqft').innerText='0';document.getElementById('adjustedSqft').innerText='0';document.getElementById('roofingSquares').innerText='0';document.getElementById('estimatedTotal').innerText='$0'}

function exportJob(){const job={app:'IR RoofScan Pro',address:document.getElementById('address')?.value||'',baseSqft:document.getElementById('baseSqft')?.innerText||'0',adjustedSqft:document.getElementById('adjustedSqft')?.innerText||'0',roofingSquares:document.getElementById('roofingSquares')?.innerText||'0',estimatedTotal:document.getElementById('estimatedTotal')?.innerText||'$0',createdAt:new Date().toISOString()};const blob=new Blob([JSON.stringify(job,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='ir-roofscan-pro-job.json';a.click();URL.revokeObjectURL(url)}

document.addEventListener('DOMContentLoaded',()=>{['pricePerSquare','wasteFactor','pitchFactor','laborPerSquare'].forEach(id=>document.getElementById(id)?.addEventListener('input',updateEstimateFromInputs));document.getElementById('resetBtn')?.addEventListener('click',resetDrawing);document.getElementById('exportBtn')?.addEventListener('click',exportJob)});