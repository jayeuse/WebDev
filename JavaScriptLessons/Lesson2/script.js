dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));


function dragElement(terrariumElement) {

  if (!terrariumElement) {
    console.error("Element not found");
    return;
  }

  // Set the element's position to absolute:
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  // Move the element when the mouse pointer is held down:
  terrariumElement.onpointerdown = pointerDrag;

  // Stop moving the element when the mouse pointer is released:
  function pointerDrag(e) {

    // Prevent the default action to prevent the text from being selected:
    e.preventDefault();

    // Get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Call a function whenever the cursor moves:
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }

  // Move the element when the mouse pointer is dragged:
  function elementDrag(e) {

    // Prevent the default action to prevent the text from being selected:
    e.preventDefault();

    // Calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Set the element's new position:
    terrariumElement.style.top = terrariumElement.offsetTop - pos2 + "px";
    terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + "px";

    console.log(terrariumElement.style.top, terrariumElement.style.left);
  }

  // Stop moving the element when the mouse pointer is released:
  function stopElementDrag() {

    // Stop moving when mouse button is released:
    document.onpointerup = null;
    document.onpointermove = null;
  }
}
