import React, {useState} from "react";
import styled from "@emotion/styled";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Ghana from "../assets/Ghana .png";
import Nigeria from "../assets/Nigeria .jpeg";
import USA from "../assets/USA .png";
import { AiFillDelete } from "react-icons/ai";

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const Form = styled.form`
	width: 400px;
	border: 1px solid #f1f1f1;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	background-color: white;
`;

const Input = styled.input`
	height: 25px;
	margin-bottom: 10px;
	width: 100%;
	padding: 5px;
	border-radius: 3px;
	border: 1px solid #dcdce9;
	transition: all 350ms;
	outline-color: #aba5f5;
	padding-left: 10px;
`;

const Select = styled.select`
	height: 30px;
	margin-bottom: 10px;
	width: 420px;
	padding: 5px;
	border-radius: 3px;
	border: 1px solid #dcdce9;
	transition: all 350ms;
	outline-color: #aba5f5;
	padding-left: 10px;
`;

const Button = styled.button`
	width: 200px;
	height: 40px;
	outline: none;
	border: none;
	background-color: #123456;
	color: white;
	cursor: pointer;
`;

const Card = styled.div`
	width: 250px;
	border: 1px solid #f1f1f1;
	background-color: white;
	padding: 10px;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	margin: 10px;

	span {
		font-size: 11px;
	}
`;
const Hold = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const TName = styled.div``;
const Name = styled.div`
	font-weight: bold;
`;
const Logo = styled.img`
	height: 30px;
	width: 30px;
	background-color: silver;
	border-radius: 50%;
	object-fit: cover;
`;

const Box = styled.div`
	color: gray;
	padding: 15px 5px 10px 5px;
	height: 10px;
`;

const CardHold = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Del = styled.div`
	color: red;
`;

interface UserData {
	fullName: string;
	email: string;
	country: string;
	phoneNumber: string;
	id: string;
}

const MainScreen :React.FC= () => {
	const [fullName, setFullName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [country, setCountry] = useState<string>("");
	const [show, setShow] = useState<Boolean>(false);
	const [toggleValue, setToggleValue] = useState<UserData>();
	const [editFullName, setEditFullName] = useState<string>("");
    const [editPhoneNumber, setEditPhoneNumber] = useState<string>("")

	const [editEmail, setEditEmail] = useState<string>("");

	const [data, setData] = useState<Array<UserData>>([]);

	const AddContacts = () => {
		setData((prev) => [
			...prev,

			{
				id: `${Math.random() * 139575638745}`,
				fullName,
				email,
				phoneNumber,
				country,
			},
		]);
	};

	const RemoveContact = (id: string) => {
		const filtered = data.filter((el) => el.id !== id);

		setData(filtered);
	};

	const toggle = (props: UserData) => {
		setShow(!show);
		setToggleValue(props);
	};

	const EditContact = () => {
		const iterate = data.map((el) => {
			return el.id === toggleValue?.id
				? {
						fullName: editFullName === "" ? toggleValue.fullName : editFullName,
						email: editEmail === "" ? toggleValue.email : editEmail,
						phoneNumber: editPhoneNumber === ""? toggleValue.phoneNumber : editPhoneNumber,
						country: toggleValue.country,
						id: toggleValue.id,
				  }
				: el;
		});

		setData(iterate);
	};

	return (
		<Container>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					AddContacts();
				}}>
				<h2>Add Contact</h2>
				<Input
					onChange={(e) => {
						setFullName(e.target.value);
					}}
					required
					placeholder='Enter fullName'
				/>
				<Input
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					required
					placeholder='Enter email'
				/>
				<Input
					onChange={(e) => {
						setPhoneNumber(e.target.value);
					}}
					placeholder='e.g 0900968565'
					required
				/>

				<Select
					onChange={(e) => {
						setCountry(e.target.value);
					}}>
					<option selected disabled>
						--select country--
					</option>
					<option value='Nigeria'>Nigeria</option>
					<option value='USA'>USA</option>
					<option value='Ghana'>Ghana</option>
				</Select>

				<Button type='submit'>Submit</Button>
			</Form>
			<br />
			<br />
			<br />
			<h2>All Contacts</h2>

			<CardHold>
				{data?.map((props) => (
					<Card key={props.id}>
						<Hold>
							<TName>
								<Name>{props.fullName}</Name>

								<span>{props.country}</span>
							</TName>
							{props.country === "Nigeria" ? <Logo src={Nigeria} /> : null}

							{props?.country === "Ghana" ? <Logo src={Ghana} /> : null}

							{props.country === "USA" ? <Logo src={USA} /> : null}
						</Hold>
						<br />
						<Box>
							<BsTelephoneFill />
							{props.phoneNumber}
						</Box>
						<Box>
							<MdEmail />
							{props.email}
						</Box>
						<Del
							onClick={() => {
								RemoveContact(props.id);
							}}>
							{" "}
							<AiFillDelete />
						</Del>
						<button
							onClick={() => {
								toggle(props);
							}}>
							Edit
						</button>
						<br />
						{show && toggleValue?.id === props.id ? (
							<div>
								<input
									onChange={(e) => {
										setEditFullName(e.target.value);
									}}
									defaultValue={toggleValue?.fullName}
									placeholder='edit name'
								/>

								<input
									onChange={(e) => {
										setEditEmail(e.target.value);
									}}
									defaultValue={toggleValue?.email}
                                    placeholder="edit email"
								/>
                                <input
									onChange={(e) => {
										setEditPhoneNumber(e.target.value);
									}}
									defaultValue={toggleValue?.phoneNumber}
								/>

								<Button onClick={EditContact}>Save</Button>
							</div>
						) : null}
					</Card>
				))}
			</CardHold>
		</Container>
	);
};

export default MainScreen;