function mostrarEstado(estado){
    const r=document.getElementById('resultadoEstado');
    if(!r)return;
    const m={estable:'¡Qué bien! Continúa con tus actividades y mantén hábitos que te hagan sentir bien.',
         atencion:'Haz una pausa, respira lentamente, identifica qué te preocupa y organiza el siguiente paso.',
         apoyo:'Busca a una persona adulta de confianza, familiar, docente u orientador escolar. No tienes que resolverlo todo sin ayuda.'};
        r.textContent=m[estado];
    }
function crearRuta(){
    const ids=['situacion','reaccion','alternativa','motivo'];
    const v=ids.map(id=>document.getElementById(id).value.trim());
    const r=document.getElementById('miRuta');if(v.some(x=>!x)){r.textContent='Completa los cuatro espacios para crear tu ruta de paz.';
        return;
    }
    r.textContent=`Cuando ocurra ${v[0]}, en lugar de ${v[1]}, intentaré ${v[2]}, porque esto ayudará a ${v[3]}.`;}