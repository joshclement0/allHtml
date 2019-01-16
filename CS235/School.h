#ifndef SCHOOL_H_
#define SCHOOL_H_
#include<string>

class School {
public:
	School() {}
	~School() {}

	virtual std::string toString()const = 0;
	virtual std::string getName()const = 0;
	virtual int getStuNum() const {
		return 0; }
	virtual std::string getStuName() const { 
		return "0"; }
	virtual std::string getStuA() const { 
		return "0"; }
	virtual std::string getStuPhoneNumber() const { 
		return "0"; }
	virtual std::string getClassName() const { 
		return "0"; }
	virtual std::string getClassTime() const { 
		return "0"; }
	virtual std::string getDayOfWeek() const { 
		return "0"; }
	virtual std::string getGrade() const { 
		return "0"; }
	virtual std::string getClassRoom() const { 
		return "0"; }
};
#endif // !SCHOOL_H_
