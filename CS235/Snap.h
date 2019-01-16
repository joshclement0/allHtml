#ifndef SNAP_H_
#define SNAP_H_
#include "School.h"
#include <string>
#include <sstream>
class Snap:public School {
private:
	int stdNumber;
	std::string stdName;
	std::string stdPhoneNumber;
	std::string stdA;
	std::string name="snap";
public:
	Snap() {}
	Snap(int number, std::string name, std::string a, std::string pNumber) :
		stdNumber(number), stdName(name), stdPhoneNumber(pNumber), stdA(a) {}
	~Snap() {}

	/*
	*Print out data members
	*/
	std::string toString()const {
		std::stringstream ss;
		ss << "snap(" << stdNumber << "," << stdName << "," << stdA << "," << stdPhoneNumber << ")";
		return ss.str();
	}
	std::string getName() const {
		return name;
	}
	int getStuNum() const {
		return stdNumber;
	}
	std::string getStuName() const {
		return stdName;
	}
	std::string getStuA() const {
		return stdA;
	}
	std::string getStuPhoneNumber() const {
		return stdPhoneNumber;
	}
};
#endif // !SNAP_H_
