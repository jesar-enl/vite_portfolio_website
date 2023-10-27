import { Card, CardBody, Typography } from '@material-tailwind/react';

export function AboutMe() {
  return (
    <div>
      <Card className="w-full shadow-blue-gray-100 ">
        <CardBody>
          <div className="shadow-blue-gray-500 mb-5">
            <Typography variant="h5" color="gray" className="mb-4 text-center">
              more about me
            </Typography>
          </div>
          <Typography color="black" className="mb-3 font-normal">
            With a passion for solving complex problems, I possess a strong
            ability to think creatively and strategically, working
            collaboratively with cross-functional teams to ensure the success of
            each project. Whether working on a team or independently, I
            consistently maintain a strong track record of meeting strict
            deadlines while adhering to best practices and maintaining the
            highest standards of quality.
          </Typography>
          <Typography color="black" className="mb-3 font-normal">
            My career goal is to continue to grow and expand my skillset, taking
            on new challenges and keeping up-to-date with emerging trnds in the
            industry. I am committed to deliverying exceptional results and
            exceeding expectations, making meaningful contributions to the
            organizations I work with.
          </Typography>
          <Typography color="black" className="mb-1 font-normal">
            Overall, I am a dedicated and driven individual with a proven record
            of delivering outstanding results, and I am excited about the
            opportunities that lie ahead.
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}
