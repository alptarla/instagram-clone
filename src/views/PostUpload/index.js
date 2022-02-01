import { InboxOutlined } from '@ant-design/icons/lib/icons';
import { Input, Button, message } from 'antd';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../store/slices/post';
import classes from './PostUpload.module.scss';

function PostUpload() {
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onDrop = useCallback((acceptedFiles) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(acceptedFiles[0]);
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const uploadPost = async () => {
    if (!file) return;
    try {
      setLoading(true);
      await dispatch(createPost({ userId: user.id, description, file })).unwrap();
      navigate('/');
    } catch (error) {
      message.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setPreview(false);
    setFile(null);
  };

  return (
    <div className={classes.upload}>
      {preview ? (
        <Button
          className={classes.cancelButton}
          onClick={handleCancel}
        >
          Cancel
        </Button>
      ) : null}
      <div
        {...getRootProps()}
        className={classes.uploadContent}
      >
        <input {...getInputProps()} />
        <InboxOutlined />
        <p>Drag 'n' drop some files here, or click to select files</p>
        {preview ? (
          <img
            width={200}
            src={preview}
            alt={description}
          />
        ) : null}
      </div>
      <Input.TextArea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={classes.description}
      />
      <Button
        type="primary"
        onClick={uploadPost}
        disabled={!file}
        loading={loading}
      >
        Upload Post
      </Button>
    </div>
  );
}

export default PostUpload;
