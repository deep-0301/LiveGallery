import React, { useState } from 'react';
import ImageGrid from './comps/ImgGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadFrom from './comps/UploadFrom';

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadFrom />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
