import { createBlogPost } from '@/network/api/blog';
import * as BlogApi from '@/network/api/blog';
import { Button, Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

interface CreatePostFormData {
  title: string;
  slug: string;
  summary: string;
  body: string;
}

export default function CreateBlogPostPage() {
  const { register, handleSubmit } = useForm<CreatePostFormData>();

  async function onSubmit(input: CreatePostFormData) {
    try {
      const response = await BlogApi.createBlogPost(input);
      console.log(response);
      alert('Blog post created successfully');
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <div>
      <h1>Create Blog Post</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className='mb-3' controlId='title-input'>
          <Form.Label>Post title</Form.Label>
          <FormControl
            {...register('title')}
            type='text'
            placeholder='Enter title'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='slug-input'>
          <Form.Label>Post slug</Form.Label>
          <FormControl
            {...register('slug')}
            type='text'
            placeholder='Enter slug'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='summary-input'>
          <Form.Label>Post summary</Form.Label>
          <FormControl
            {...register('summary')}
            as='textarea'
            rows={10}
            placeholder='Enter summary (clear text)'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='body-input'>
          <Form.Label>Post body</Form.Label>
          <FormControl
            {...register('body')}
            as='textarea'
            rows={10}
            placeholder='Enter body'
          />
        </Form.Group>

        <Button type='submit' variant='primary'>
          Create Post
        </Button>
      </Form>
    </div>
  );
}
